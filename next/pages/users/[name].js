import {useRouter} from 'next/router';

const dynamic = () => {
    const { query } = useRouter();
    return (
        <div>
            <h1>User Name: {query.name}</h1>
        </div>
    );
}

export default dynamic;