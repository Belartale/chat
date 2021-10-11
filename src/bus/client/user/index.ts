// Hooks
import { useDispatch } from 'react-redux';
import { useSelector } from '../../../tools/hooks';

// Actions
import { uesrActions } from './slice';
import { RefreshUserActionAsync } from './saga/actions';

// Types
import { User } from './types';

export const useUser = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state);
    // useEffect(() => {
    //     dispatch(weathersActions.setFilteredWeathers(newFilteredData));
    //     dispatch(weathersActions.setCurrentWeather(newFilteredData[ 0 ]));
    // }, [ filter ]);

    return {
        userId:      user,
        // setFilter: (payload: User) => void dispatch(uesrActions.setUser(payload)),
        RefreshUser: (payload: string) => void dispatch(RefreshUserActionAsync(payload)),
    };
};
