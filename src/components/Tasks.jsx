function Tasks(props) {
  return (
    <ul className="space-y-2 bg-amber-50 p-6 rounded-md shadow ">
      {props.tasks.map((task) => (
        <li key={task.id} className=" bg-slate-400 m-2 p-2 rounded-md flex justify-between gap-5">
          <button className="w-full " onClick={props.showMore}>
            {task.name}
          </button>
          <button>
            &gt;
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
