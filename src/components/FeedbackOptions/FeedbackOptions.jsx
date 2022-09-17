import css from "./FeedbackOptions.module.css"
export const FeedbackOptions = ({options, onLeaveFeedback}) => {
return (
    <>
    <button className={css.button} type="button" onClick={this.goodIncrement}> Good </button>
    <button className={css.button} type="button" onClick={this.neutralIncrement}> Neutral </button>
    <button className={css.button} type="button" onClick={this.badIncrement}> Bad </button>
    </>
)
}