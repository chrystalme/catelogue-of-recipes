// eslint-disable one-expression-per-line
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from '../style/league.module.css';

const League = ({ league }) => {
  const { competition, season, teams } = league;

  return (
    <div>

      <div className={style.header}>
        <Link to={`${competition.id}/standings`}>
          <h3>
            {competition.name}
            &brvbar;
            {competition.area.name}
          </h3>
        </Link>
        <h3>
          Current Match Day:
          {' '}
          {season.currentMatchday}
        </h3>
        <h3>
          Start Date:
          {' '}
          {season.startDate}
        </h3>
        <h3>
          End Date:
          {' '}
          {season.endDate}
        </h3>
      </div>
      <div className={style.container}>
        {teams.map((team) => (
          <div className={style.item} key={team.id}>
            <Link to={`${team.id}`}>
              <h5>{team.name}</h5>
              <img
                style={{ width: 100 }}
                src={
                  team.crestUrl === null
                    ? 'https://static6.depositphotos.com/1007347/574/v/600/depositphotos_5749760-stock-illustration-football.jpg'
                    : team.crestUrl
                }
                alt={team.name}
              />
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
};

League.propTypes = {
  league: PropTypes.shape({
    competition: PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      area: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    }).isRequired,
    season: PropTypes.shape({
      startDate: PropTypes.string,
      endDate: PropTypes.string,
      currentMatchday: PropTypes.number,
    }),
    teams: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        crestUrl: PropTypes.string,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};

export default League;
