function Card({ card }) {
  return (
    <div className="card">
      <div className="card-inner">
        
        {/* Front of card */}
        <div className="card-front">
          <h2>{card.title}</h2>
          <h1 className="about-card-emoji">{card.title_emoji}</h1>
        </div>


        {/* Back of card */}
        <div className="card-back">
          <div className="card-title-back">
            {card.card_title_back && (
              <p>{card.card_title_back}</p>
            )}
          </div>

          {card.card_text_back && <p>{card.card_text_back}</p>}

          {card.card_list_back && (
            <ul>
              {card.card_list_back.map((r, idx) => (
                <li key={idx}>
                    {r.url ? (
                        <a href={r.url} target="_blank" rel="noopener noreferrer">
                        {r.name}
                        </a>
                    ) : (
                        r.name
                    )}
                </li>
              ))}
            </ul>
          )}
        </div>
        
      </div>
    </div>
  );
}

export default Card;