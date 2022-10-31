import PropTypes from 'prop-types';
import css from './Parameter.module.css';

export const Parameter = ({ label, percentage }) => {
  const color = getRandomHexColor();
  return (
    <li className={css.item} style={{ backgroundColor: color }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </li>
  );
};

Parameter.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
