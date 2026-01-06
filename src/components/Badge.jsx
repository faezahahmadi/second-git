export default function Badge({ course, week, topic }) {
    return (
        <div>
            <h1>{course}</h1>
            <h2>{week}</h2>
            <h2>{topic}</h2>
        </div>
    );
}