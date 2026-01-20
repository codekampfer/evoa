# API Services Usage Examples

This file contains practical examples of how to use the EVOA API services in your React components.

## Table of Contents
1. [Authentication](#authentication)
2. [Reels/Feed](#reelsfeed)
3. [Pitch Management](#pitch-management)
4. [Startups](#startups)
5. [Explore/Search](#exploresearch)
6. [Notifications](#notifications)
7. [User Profile](#user-profile)
8. [Meetings](#meetings)

---

## Authentication

### Login Component Example

```javascript
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await login({ email, password });
      // Token and user data are automatically stored
      const user = response.data.user;
      
      // Navigate based on role
      if (user.role === 'startup') navigate('/startup');
      else if (user.role === 'investor') navigate('/investor');
      else navigate('/viewer');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      {error && <div>{error}</div>}
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}
```

### Signup Component Example

```javascript
import { useState } from 'react';
import { signup } from '../services';

function SignupPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    role: 'viewer'
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signup(formData);
      // User is automatically logged in after signup
      alert('Account created successfully!');
    } catch (err) {
      if (err.status === 409) {
        alert('User already exists');
      } else {
        alert(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  );
}
```

---

## Reels/Feed

### Feed Component Example

```javascript
import { useState, useEffect } from 'react';
import { getFeed, likeReel, unlikeReel } from '../services';

function FeedPage() {
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [feedType, setFeedType] = useState('for_you');
  const [cursor, setCursor] = useState(null);

  useEffect(() => {
    loadFeed();
  }, [feedType]);

  const loadFeed = async () => {
    try {
      setLoading(true);
      const response = await getFeed({
        type: feedType,
        cursor,
        limit: 20
      });
      setFeed(response.data.items || response.data);
      setCursor(response.data.nextCursor);
    } catch (err) {
      console.error('Failed to load feed:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async (reelId, isLiked) => {
    try {
      if (isLiked) {
        await unlikeReel(reelId);
      } else {
        await likeReel(reelId);
      }
      
      // Update local state
      setFeed(prev => prev.map(reel => 
        reel.id === reelId 
          ? { 
              ...reel, 
              liked: !isLiked,
              likes: isLiked ? reel.likes - 1 : reel.likes + 1
            }
          : reel
      ));
    } catch (err) {
      console.error('Failed to like/unlike:', err);
    }
  };

  if (loading) return <div>Loading feed...</div>;

  return (
    <div>
      <div>
        <button onClick={() => setFeedType('for_you')}>For You</button>
        <button onClick={() => setFeedType('following')}>Following</button>
      </div>
      {feed.map(reel => (
        <div key={reel.id}>
          <p>{reel.description}</p>
          <button onClick={() => handleLike(reel.id, reel.liked)}>
            {reel.liked ? 'Unlike' : 'Like'} ({reel.likes})
          </button>
        </div>
      ))}
    </div>
  );
}
```

### Comment Component Example

```javascript
import { useState, useEffect } from 'react';
import { getReelComments, commentOnReel } from '../services';

function CommentsSection({ reelId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadComments();
  }, [reelId]);

  const loadComments = async () => {
    try {
      const response = await getReelComments(reelId);
      setComments(response.data);
    } catch (err) {
      console.error('Failed to load comments:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
      setLoading(true);
      const response = await commentOnReel(reelId, {
        content: newComment
      });
      setComments(prev => [response.data, ...prev]);
      setNewComment('');
    } catch (err) {
      console.error('Failed to post comment:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <button type="submit" disabled={loading}>
          Post
        </button>
      </form>
      {comments.map(comment => (
        <div key={comment.id}>
          <p>{comment.content}</p>
          <small>{comment.authorName}</small>
        </div>
      ))}
    </div>
  );
}
```

---

## Pitch Management

### Pitch Details Page

```javascript
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPitchDetails, getAIAnalysis, scheduleMeeting } from '../services';
import { getUserData } from '../services';

function PitchDetailsPage() {
  const { id } = useParams();
  const [pitch, setPitch] = useState(null);
  const [aiAnalysis, setAiAnalysis] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = getUserData();

  useEffect(() => {
    loadPitch();
  }, [id]);

  const loadPitch = async () => {
    try {
      setLoading(true);
      const response = await getPitchDetails(id);
      setPitch(response.data);
    } catch (err) {
      console.error('Failed to load pitch:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleGetAIAnalysis = async () => {
    if (!pitch?.startupId) return;
    
    try {
      const response = await getAIAnalysis(pitch.startupId);
      setAiAnalysis(response.data);
    } catch (err) {
      if (err.status === 403) {
        alert('Only investors and incubators can access AI analysis');
      } else {
        console.error('Failed to get AI analysis:', err);
      }
    }
  };

  const handleScheduleMeeting = async (scheduledAt) => {
    if (!pitch?.startupId) return;

    try {
      const response = await scheduleMeeting(pitch.startupId, {
        scheduledAt,
        notes: 'Interested in discussing investment opportunity'
      });
      alert('Meeting request sent successfully!');
    } catch (err) {
      if (err.status === 403) {
        alert('Only investors and incubators can schedule meetings');
      } else {
        console.error('Failed to schedule meeting:', err);
      }
    }
  };

  if (loading) return <div>Loading pitch...</div>;
  if (!pitch) return <div>Pitch not found</div>;

  const isInvestorOrIncubator = ['investor', 'incubator'].includes(user?.role);

  return (
    <div>
      <h1>{pitch.title}</h1>
      <p>{pitch.description}</p>
      
      {isInvestorOrIncubator && (
        <div>
          <button onClick={handleGetAIAnalysis}>
            Get AI Analysis
          </button>
          {aiAnalysis && (
            <div>
              <h3>AI Analysis</h3>
              <p>{aiAnalysis.summary}</p>
            </div>
          )}
          
          <button onClick={() => handleScheduleMeeting(new Date().toISOString())}>
            Schedule Meeting
          </button>
        </div>
      )}
    </div>
  );
}
```

---

## Startups

### Startup Profile Page

```javascript
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  getStartupDetails, 
  followStartup, 
  unfollowStartup 
} from '../services';

function StartupProfilePage() {
  const { id } = useParams();
  const [startup, setStartup] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStartup();
  }, [id]);

  const loadStartup = async () => {
    try {
      setLoading(true);
      const response = await getStartupDetails(id);
      setStartup(response.data);
      setIsFollowing(response.data.isFollowing || false);
    } catch (err) {
      console.error('Failed to load startup:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleFollow = async () => {
    try {
      if (isFollowing) {
        await unfollowStartup(id);
        setIsFollowing(false);
      } else {
        await followStartup(id);
        setIsFollowing(true);
      }
    } catch (err) {
      if (err.status === 409) {
        setIsFollowing(true);
      } else {
        console.error('Failed to follow/unfollow:', err);
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!startup) return <div>Startup not found</div>;

  return (
    <div>
      <h1>{startup.name}</h1>
      <p>{startup.description}</p>
      <button onClick={handleFollow}>
        {isFollowing ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  );
}
```

### Followed Startups List

```javascript
import { useState, useEffect } from 'react';
import { getFollowedStartups } from '../services';

function FollowedStartupsPage() {
  const [startups, setStartups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFollowedStartups();
  }, []);

  const loadFollowedStartups = async () => {
    try {
      setLoading(true);
      const response = await getFollowedStartups();
      setStartups(response.data);
    } catch (err) {
      console.error('Failed to load followed startups:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Followed Startups</h2>
      {startups.length === 0 ? (
        <p>You're not following any startups yet.</p>
      ) : (
        startups.map(startup => (
          <div key={startup.id}>
            <h3>{startup.name}</h3>
            <p>{startup.description}</p>
          </div>
        ))
      )}
    </div>
  );
}
```

---

## Explore/Search

### Search Component

```javascript
import { useState } from 'react';
import { search } from '../services';

function SearchPage() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      setLoading(true);
      const response = await search({ q: query, type });
      setResults(response.data);
    } catch (err) {
      console.error('Search failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">All</option>
          <option value="startups">Startups</option>
          <option value="investors">Investors</option>
          <option value="hashtags">Hashtags</option>
        </select>
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {results.length > 0 && (
        <div>
          {results.map(item => (
            <div key={item.id}>
              <h3>{item.name || item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
```

### Trending Page

```javascript
import { useState, useEffect } from 'react';
import { 
  getTrendingHashtags, 
  getTopStartups, 
  getStartupsOfWeek 
} from '../services';

function TrendingPage() {
  const [trending, setTrending] = useState({
    hashtags: [],
    topStartups: [],
    weekStartups: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTrending();
  }, []);

  const loadTrending = async () => {
    try {
      setLoading(true);
      const [hashtags, topStartups, weekStartups] = await Promise.all([
        getTrendingHashtags(),
        getTopStartups(),
        getStartupsOfWeek()
      ]);

      setTrending({
        hashtags: hashtags.data,
        topStartups: topStartups.data,
        weekStartups: weekStartups.data
      });
    } catch (err) {
      console.error('Failed to load trending:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading trending...</div>;

  return (
    <div>
      <section>
        <h2>Trending Hashtags</h2>
        {trending.hashtags.map(tag => (
          <div key={tag.id}>#{tag.name}</div>
        ))}
      </section>

      <section>
        <h2>Top Startups</h2>
        {trending.topStartups.map(startup => (
          <div key={startup.id}>
            <h3>{startup.name}</h3>
          </div>
        ))}
      </section>

      <section>
        <h2>Startups of the Week</h2>
        {trending.weekStartups.map(startup => (
          <div key={startup.id}>
            <h3>{startup.name}</h3>
          </div>
        ))}
      </section>
    </div>
  );
}
```

---

## Notifications

### Notifications Component

```javascript
import { useState, useEffect } from 'react';
import { 
  getNotifications, 
  markNotificationAsRead, 
  markAllNotificationsAsRead 
} from '../services';

function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadNotifications();
  }, [filter]);

  const loadNotifications = async () => {
    try {
      setLoading(true);
      const response = await getNotifications({ type: filter });
      setNotifications(response.data);
    } catch (err) {
      console.error('Failed to load notifications:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsRead = async (notificationId) => {
    try {
      await markNotificationAsRead(notificationId);
      setNotifications(prev => 
        prev.map(notif => 
          notif.id === notificationId 
            ? { ...notif, read: true }
            : notif
        )
      );
    } catch (err) {
      console.error('Failed to mark as read:', err);
    }
  };

  const handleMarkAllAsRead = async () => {
    try {
      await markAllNotificationsAsRead();
      setNotifications(prev => 
        prev.map(notif => ({ ...notif, read: true }))
      );
    } catch (err) {
      console.error('Failed to mark all as read:', err);
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div>
      <div>
        <h2>Notifications {unreadCount > 0 && `(${unreadCount})`}</h2>
        <button onClick={handleMarkAllAsRead}>
          Mark all as read
        </button>
      </div>

      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('battleground')}>Battleground</button>
        <button onClick={() => setFilter('investor')}>Investor</button>
        <button onClick={() => setFilter('pitch')}>Pitch</button>
        <button onClick={() => setFilter('system')}>System</button>
      </div>

      {loading ? (
        <div>Loading notifications...</div>
      ) : (
        notifications.map(notif => (
          <div 
            key={notif.id}
            onClick={() => !notif.read && handleMarkAsRead(notif.id)}
            style={{ opacity: notif.read ? 0.6 : 1 }}
          >
            <h3>{notif.title}</h3>
            <p>{notif.message}</p>
            <small>{new Date(notif.createdAt).toLocaleDateString()}</small>
          </div>
        ))
      )}
    </div>
  );
}
```

---

## User Profile

### Profile Page

```javascript
import { useState, useEffect } from 'react';
import { getCurrentUserProfile, updateUserProfile } from '../services';

function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      setLoading(true);
      const response = await getCurrentUserProfile();
      setProfile(response.data);
      setFormData(response.data);
    } catch (err) {
      console.error('Failed to load profile:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      const response = await updateUserProfile(formData);
      setProfile(response.data);
      setEditing(false);
    } catch (err) {
      console.error('Failed to update profile:', err);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div>Loading profile...</div>;
  if (!profile) return <div>Profile not found</div>;

  return (
    <div>
      {!editing ? (
        <div>
          <h1>{profile.fullName}</h1>
          <p>{profile.bio}</p>
          <p>{profile.company}</p>
          <p>{profile.location}</p>
          <button onClick={() => setEditing(true)}>Edit Profile</button>
        </div>
      ) : (
        <div>
          <input
            value={formData.fullName || ''}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="Full Name"
          />
          <textarea
            value={formData.bio || ''}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            placeholder="Bio"
          />
          <input
            value={formData.company || ''}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Company"
          />
          <input
            value={formData.location || ''}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            placeholder="Location"
          />
          <button onClick={handleSave} disabled={saving}>
            {saving ? 'Saving...' : 'Save'}
          </button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
}
```

---

## Meetings

### Meetings Management

```javascript
import { useState, useEffect } from 'react';
import { getMeetings, acceptMeeting, rejectMeeting } from '../services';
import { getUserData } from '../services';

function MeetingsPage() {
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = getUserData();
  const isFounder = user?.role === 'startup';

  useEffect(() => {
    loadMeetings();
  }, []);

  const loadMeetings = async () => {
    try {
      setLoading(true);
      const response = await getMeetings();
      setMeetings(response.data);
    } catch (err) {
      console.error('Failed to load meetings:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAccept = async (meetingId) => {
    try {
      await acceptMeeting(meetingId);
      setMeetings(prev => 
        prev.map(meeting => 
          meeting.id === meetingId 
            ? { ...meeting, status: 'accepted' }
            : meeting
        )
      );
    } catch (err) {
      if (err.status === 403) {
        alert('Only founders can accept meetings');
      } else {
        console.error('Failed to accept meeting:', err);
      }
    }
  };

  const handleReject = async (meetingId) => {
    try {
      await rejectMeeting(meetingId);
      setMeetings(prev => 
        prev.map(meeting => 
          meeting.id === meetingId 
            ? { ...meeting, status: 'rejected' }
            : meeting
        )
      );
    } catch (err) {
      if (err.status === 403) {
        alert('Only founders can reject meetings');
      } else {
        console.error('Failed to reject meeting:', err);
      }
    }
  };

  if (loading) return <div>Loading meetings...</div>;

  return (
    <div>
      <h2>Meetings</h2>
      {meetings.map(meeting => (
        <div key={meeting.id}>
          <h3>Meeting with {meeting.startupName || meeting.investorName}</h3>
          <p>Scheduled: {new Date(meeting.scheduledAt).toLocaleString()}</p>
          <p>Status: {meeting.status}</p>
          
          {isFounder && meeting.status === 'pending' && (
            <div>
              <button onClick={() => handleAccept(meeting.id)}>
                Accept
              </button>
              <button onClick={() => handleReject(meeting.id)}>
                Reject
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
```

---

## Error Handling Best Practices

Always wrap API calls in try-catch blocks and provide user feedback:

```javascript
try {
  const response = await someService();
  // Handle success
} catch (error) {
  // Handle specific error codes
  if (error.status === 401) {
    // Unauthorized - redirect to login
    navigate('/login');
  } else if (error.status === 403) {
    // Forbidden - show permission error
    alert('You do not have permission to perform this action');
  } else if (error.status === 404) {
    // Not found
    alert('Resource not found');
  } else {
    // Generic error
    alert(error.message || 'An error occurred');
  }
}
```
