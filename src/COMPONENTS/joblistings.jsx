import jobs from '../jobs.json';
import Joblist from './Joblist';


const Joblistings = () => {
    const recentJobs = jobs.slice(0, 3);

    return (
        <section className="bg-blue-100 px-4 py-10">
        <div className="container-xl lg:container m-auto">
        <h2 className="text-4xl font-bold text-indigo-500 mb-6 text-center">
            Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentJobs.map((job) => (
                <Joblist key={job.id} job = {job}/>
            ))}
            
            
        </div>
        </div>
    </section>
    )
};

export default Joblistings;