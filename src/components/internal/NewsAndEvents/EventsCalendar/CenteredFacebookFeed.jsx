// components/CenteredFacebookFeed.jsx
import React, { useEffect, useState } from 'react';
import './CenteredFacebookFeed.css';
import facebookPFP from '../../../../assets/images/hero-photos/hero-image1.jpg'; // adjust if needed

function CenteredFacebookFeed() {
    const FBAPI = '/.netlify/functions/getFacebookPosts';
    const [facebookPosts, setFacebookPosts] = useState([]);

    function truncateText(text, maxLength) {
        if (!text) return '';
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
    }

    useEffect(() => {
        fetch(FBAPI)
            .then(res => res.json())
            .then(data => {
                if (!data || !Array.isArray(data.data)) return;

                const posts = data.data
                    .filter(post => {
                        const attachment = post.attachments?.data?.[0];
                        return attachment?.title !== "This content isn't available right now";
                    })
                    .slice(0, 3)
                    .map(post => {
                        const attachment = post.attachments?.data?.[0];
                        return {
                            id: post.id,
                            message: post.message || null,
                            created_time: post.created_time,
                            image: attachment?.media?.image?.src || null,
                            url: attachment?.url || null,
                        };
                    });

                setFacebookPosts(posts);
            })
            .catch(err => console.error('🚨 Error fetching posts:', err));
    }, []);

    return (
        <div className="centered-fb-feed-container">
            <h2>Facebook Feed</h2>
            {facebookPosts.length === 0 && <p>Loading posts...</p>}
            {facebookPosts.map(post => (
                <a
                    href="https://www.facebook.com/SegueIFL"
                    target="_blank"
                    rel="noopener noreferrer"
                    key={post.id}
                    className="centered-fb-post"
                >
                    <div className="fb-post-header">
                        <img src={facebookPFP} alt="Segue logo" className="fb-profile-photo" />
                        <div className="fb-profile-info">
                            <div className="fb-page-name">Segue Institute for Learning</div>
                            <small className="fb-post-date">
                                {new Date(post.created_time).toLocaleString(undefined, {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric',
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    hour12: true,
                                })}
                            </small>
                        </div>
                    </div>
                    <div className="fb-post-content">
                        {post.image && <img src={post.image} alt="Post" className="fb-post-image-large" />}
                        {post.message && <p>{truncateText(post.message, 500)}</p>}
                    </div>
                </a>
            ))}
        </div>
    );
}

export default CenteredFacebookFeed;
