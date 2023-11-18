import * as React from "react";
import { Card } from "react-bootstrap";

const AwardCard = ({ header, title, subtitle, text, link, footer }) => {
  return (
    <Card className="w-75 h-100 text-center">
      <Card.Header>{header}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
        <Card.Link href={link}>{text}</Card.Link>
      </Card.Body>
      {footer && <Card.Footer className="text-muted">{footer}</Card.Footer>}
    </Card>
  );
};

export default AwardCard;
