import { Parameter } from 'components/Parameter/Parameter';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
      {title ? <h2 className={css.title}>{title}</h2> : ''}
      <ul className={css.statlist}>
        {stats.map(({ id, label, percentage }) => (
          <Parameter key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
