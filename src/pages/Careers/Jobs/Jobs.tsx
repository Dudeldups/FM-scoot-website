import Btn from "../../../components/Btn/Btn";
import jobs from "../../../data/jobs.json";
import { StyledJobsSection, StyledList } from "./styles";

const Jobs = () => {
  return (
    <StyledJobsSection>
      <h2 className="sr-only">Our open job listings</h2>
      <StyledList>
        {jobs.map((job, index) => (
          <li key={"job-" + index}>
            <hgroup>
              <h3>{job.position}</h3>
              <p>{job.location}</p>
            </hgroup>
            <Btn>Apply</Btn>
          </li>
        ))}
      </StyledList>
    </StyledJobsSection>
  );
};

export default Jobs;
