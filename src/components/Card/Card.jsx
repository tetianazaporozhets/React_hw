import "./Card.css";

const Card = (props) => {
  const percentOfCourse =
    (props.course.finishedModules / props.course.modules) * 100;
  return (
    <div>
      <div className="card">
        <div className="image__container">
          <img src={props.course.image} alt="" />
          <div className="level">{props.course.level}</div>
        </div>
        <h3 className="card__title">{props.course.title}</h3>
        <div className="card__info">
          <div className="user">
            <img src={props.course.user.avatar} alt={props.course.user.name} />
            <p>{props.course.user.name}</p>
          </div>
          <div className="rating">
            <p>{props.course.rating}</p>
          </div>
        </div>

        {props.isMyCourse ? (
          <div>
            <progress value={percentOfCourse} max="100"></progress>
            <div className="card__info">
              <p>
                {props.course.finishedModules} / {props.course.modules} Modules
              </p>
              <div>{percentOfCourse} % </div>
            </div>
          </div>
        ) : (
          <div className="card__info">
            <div>{props.course.students} Student</div>
            <div>{props.course.modules} Modules</div>
            <div>{props.course.duration} sec</div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Card;
