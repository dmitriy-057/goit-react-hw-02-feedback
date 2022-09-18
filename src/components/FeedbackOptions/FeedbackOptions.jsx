import css from "./FeedbackOptions.module.css"
import PropTypes from "prop-types"
export const FeedbackOptions = ({options, onLeaveFeedback}) => {
return (
    <>
    <button className={css.button} type="button" onClick={() => {onLeaveFeedback(options[0])}}> Good </button>
    <button className={css.button} type="button" onClick={() => {onLeaveFeedback(options[1])}}> Neutral </button>
    <button className={css.button} type="button" onClick={() => {onLeaveFeedback(options[2])}}> Bad </button>
    </>
)
}
FeedbackOptions.propTypes = {
    button: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.string)
}