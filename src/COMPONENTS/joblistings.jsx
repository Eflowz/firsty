import { useState, useEffect } from 'react';
import Joblist from './Joblist';
import Spinner from './Spinner';

const Joblistings = ({ isHome = false}) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
        try {
            const res = await fetch (apiUrl);
            const data = await res.json();
            setJobs(data);
        } catch (error) {
            console.log ('errror fetching data', error);
        } finally {
            setLoading(false);
        }
    }
        fetchJobs();
    }, []);

    return (
        <section className="bg-blue-100 px-4 py-10">
        <div className="container-xl lg:container m-auto">
        <h2 className="text-4xl font-bold text-indigo-500 mb-6 text-center">
        {isHome ? 'Recent Jobs' : 'Browse Jobs' }  
        </h2>
        
            {loading ? 
                (<div className="flex justify-center items-center h-60">
                <Spinner loading={loading} />
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map ((job) => (
                <Joblist key={job.id} job={job} />
            ))}
        </div>
        )}
        </div>
    </section>
    )
};

export default Joblistings;