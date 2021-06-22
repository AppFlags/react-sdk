import { useState, useEffect } from 'react';
import AppFlags from "appflags";
import {Flag} from '@appflags/common';

export const useFlag = function(flagKey: string): Flag|undefined {
    const [flag, setFlag] = useState<Flag|undefined>(undefined);

    useEffect(() => {
        AppFlags.onFlagChanged(flagKey, (flag) => setFlag(flag));
    }, [flagKey]);

    return flag;
};