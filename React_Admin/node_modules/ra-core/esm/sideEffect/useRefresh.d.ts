/**
 * Hook for Refresh Side Effect
 *
 * @example
 *
 * const refresh = useRefresh();
 * refresh();
 */
declare const useRefresh: () => (doRefresh?: any) => import("../actions/uiActions").RefreshViewAction;
export default useRefresh;
