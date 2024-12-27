import projects from '@/DUMMY_DATA/projects.json';

export const useGetColumns = (project) => {
    const columns = []
    project.columns.forEach( c => {
        columns.push({
            id: c.id,
            name: c.name
        })
    })
    
    return col

// For dynamic data (optional)
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetch('/api/projects')
  //     .then((res) => res.json())
  //     .then(setData);
  // }, []);
  // return data;
} 