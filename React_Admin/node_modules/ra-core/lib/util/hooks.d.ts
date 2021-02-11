/// <reference types="react" />
export declare function useSafeSetState<T>(initialState?: T): [T, React.Dispatch<React.SetStateAction<T>>];
export declare function usePrevious(value: any): undefined;
export declare function useDeepCompareEffect(callback: any, inputs: any): void;
export declare function useTimeout(ms?: number): boolean;
