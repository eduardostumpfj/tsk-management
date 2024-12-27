export default function TimelineCard({task, style}){
    let taskColor;

    switch (task.column_id) {
      case "col1":
        taskColor = "bg-green-100";
        break;
      case "col2":
        taskColor = "bg-purple-100";
        break;
      case "col3":
        taskColor = "bg-pink-100";
        break;
      case "col4":
        taskColor = "bg-salmon-100";
        break;
      default:
        taskColor = "bg-gray-100";
    }

    return (
        <div className="py-1" style={style}>
            <div className={`h-[50px] rounded-lg ${taskColor} text-dark-700 flex items-center px-2 font-bold text-nowrap`}>
                 <p className="w-[calc(100%-.5rem)]  overflow-hidden ">{task.name}</p>
            </div>
        </div>
    )
}