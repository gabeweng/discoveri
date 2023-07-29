import { useRouter} from 'next/router';

export default function User({ builderJson }) {
    const router = useRouter();
    
    return (
        <div>
            user = {router.query.user}
            Hi
        </div>
    )
}