import { createContext, useContext, useEffect, useReducer } from "react";
import { fetchJobs } from "../services/JobsService";

const JobsContext = createContext();

const inialState = {
  isLoading: false,
  selectedJob: null,
  jobList: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "jobs/load":
      return {
        ...state,
        jobList: action.payload,
        isLoading: false,
        selectedJob: action.payload?.[0],
      };
    case "jobs/select":
      return {
        ...state,
        selectedJob: action.payload,
      };

    default:
      return state;
  }
}

function JobsContextProvider({ children }) {
  const [{ isLoading, selectedJob, jobList }, dispatch] = useReducer(
    reducer,
    inialState
  );

  useEffect(() => {
    (async () => {
      dispatch({
        type: "loading",
      });
      const data = await fetchJobs();
      dispatch({
        type: "jobs/load",
        payload: data,
      });
    })();
  }, []);

  return (
    <JobsContext.Provider
      value={{
        isLoading,
        selectedJob,
        jobList,
        dispatch,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
}

export function useJobs() {
  const context = useContext(JobsContext);
  if (!context) {
    throw new Error("The jobs context must be use within a jobs context");
  }
  return context;
}

export default JobsContextProvider;
