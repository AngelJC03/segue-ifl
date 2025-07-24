// components/FacebookFeed.jsx
import React, { useEffect, useState } from 'react';
import './FacebookFeed.css';

function FacebookFeed() {
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
                        const isUnavailable = attachment?.title === "This content isn't available right now";
                        return !isUnavailable;
                    })
                    .slice(0, 3)
                    .map(post => {
                        const attachment = post.attachments?.data?.[0];
                        const image = attachment?.media?.image?.src || null;
                        const url = attachment?.url || null;

                        return {
                            id: post.id,
                            message: post.message || null,
                            created_time: post.created_time,
                            image,
                            url,
                        };
                    });

                setFacebookPosts(posts);
            })
            .catch(err => {
                console.error('🚨 Error fetching posts:', err);
            });
    }, []);

    return (
        <div className="facebook-livefeed-container">
            <h2>Facebook Feed</h2>
            {facebookPosts.length === 0 && <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>Loading Posts...</h2>}
            {facebookPosts.map(post => (
                <a
                    href="https://www.facebook.com/SegueIFL"
                    target="_blank"
                    rel="noopener noreferrer"
                    key={post.id}
                    className="fb-post-link"
                    style={{ textDecoration: 'none' }}
                >
                    <strong>
                        <div className="fb-post">
                            <small className="fb-post-date">
                                {new Date(post.created_time).toLocaleString(undefined, {
                                    year: 'numeric',
                                    month: 'numeric',
                                    day: 'numeric',
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    hour12: true,
                                })}
                            </small>

                            {post.image && (
                                <img src={post.image} alt="Facebook Post" className="fb-post-image" />
                            )}
                            {post.message && <p>{truncateText(post.message, 200)}</p>}
                        </div>
                    </strong>
                </a>
            ))}
        </div>
    );
}

export default FacebookFeed;
