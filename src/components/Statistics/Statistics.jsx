import PropTypes from 'prop-types';



const Statistics = ({ title, stats }) => {
    return (
    <section className="statistics">
    {title && <h2 className="title">{title}</h2>}
    <ul className="stat-list">
     {stats.map(({id,label,percentage}) =>
        <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
        </li>
        )}
    </ul>
    </section>)
}

Statistics.proTotype = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape(
    {
        id: PropTypes.string,
        label: PropTypes.string,
        percentage : PropTypes.string,
    }))
   
}

export default Statistics;