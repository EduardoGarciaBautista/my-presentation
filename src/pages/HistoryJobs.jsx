import styled from "styled-components";
import JobDetail from "../features/history-jobs/JobDetail";
import Equalizer from "../features/history-jobs/Equalizer";
import { useEffect, useReducer } from "react";
import { fetchJobs } from "../services/JobsService";
import EqualizerItem from "../features/history-jobs/EqualizerItem";
import { useFetch } from "../hooks/useFetch";

const inialState = {
  isLoading: false,
  selectedJob: null,
  jobList: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "jobs/loading":
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

const StyledHistory = styled.section`
  overflow-y: auto;
  height: 100%;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 180px 1fr;
  gap: 2rem;
`;

const HistoryJobs = () => {
  const [{ selectedJob, jobList }, dispatch] = useReducer(reducer, inialState);

  const setLoading = () =>
    dispatch({
      type: "jobs/loading",
    });

  const loadJobs = (jobList) =>
    dispatch({
      type: "jobs/load",
      payload: jobList,
    });

  const selectJob = (job) =>
    dispatch({
      type: "jobs/select",
      payload: job,
    });

  useFetch({
    loading: setLoading,
    fetch: fetchJobs,
    loadData: loadJobs,
  });

  return (
    <StyledHistory>
      <JobDetail
        selectedJob={selectedJob}
        indicator={<i className="fa-solid fa-info"></i>}
      ></JobDetail>
      <Equalizer>
        {jobList.map((jobItem) => (
          <EqualizerItem
            jobItem={jobItem}
            key={jobItem.title}
            selectJob={selectJob}
            selectedJob={selectedJob}
          />
        ))}
      </Equalizer>
    </StyledHistory>
  );
};

export default HistoryJobs;
