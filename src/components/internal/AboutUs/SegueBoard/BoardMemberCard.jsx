// components/BoardMemberCard.jsx
import React, { useState } from 'react';
import { Card, Image, Button } from 'react-bootstrap';

const BoardMemberCard = ({ name, term, email, imageSrc, children }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);

  const previewLength = 300; // Number of characters to show in preview
  const isLongText = children && children.length > previewLength;
  const displayedText = expanded || !isLongText ? children : `${children.slice(0, previewLength)}...`;

  return (
    <Card className="shadow-sm mx-auto mb-4" style={{ maxWidth: '24rem', borderRadius: '1rem' }}>
      <Card.Body className="text-center">
        <Image
          src={imageSrc || "https://via.placeholder.com/300x300"}
          alt={name}
          roundedCircle
          width={186}
          height={186}
          className="mb-3 object-fit-cover"
        />
        <Card.Title className="fs-2 fw-bold">{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted fs-5">{term}</Card.Subtitle>

        <Card.Text className="text-start fs-5" style={{ whiteSpace: 'pre-line' }}>
          {displayedText}
        </Card.Text>

        {isLongText && (
          <div className="text-start mb-3">
            <Button variant="link" className="p-0 fs-6" onClick={toggleExpanded}>
              {expanded ? 'Read less' : 'Read more'}
            </Button>
          </div>
        )}

        <Card.Link href={`mailto:${email}`}>
          <Button variant="primary" className="w-100">
            E-mail {name}
          </Button>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default BoardMemberCard;
