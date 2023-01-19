import styled from "styled-components";

export const StyledDiv = styled.div`
  h1 {
    text-align: center;

    font-size: 2rem;
    color: var(--color-primary);

    padding: 20px;
  }

  form {
    display: flex;
    justify-content: center;

    padding: 20px;

    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      height: 100%;
      width: 100%;
      li {
        display: flex;
        flex-direction: column;

        padding: 15px 0px;

        p {
          font-size: 1.16rem;

          color: var(--color-primary);

          padding: 5px 0px;
        }

        span {
          color: #cecece;
          font-size: 0.91;

          padding: 5px 0px;
        }

        input {
          width: 300px;
          height: 30px;

          border: 1px solid var(--color-third);
          border-radius: 4px;
        }

        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
        }

        input:hover {
          border: 1px solid var(--input-border);
        }
        input:focus {
          border: 1px solid var(--input-border);
          outline: none;
        }
      }
    }
  }

  @media (min-width: 720px) {
    width: 450px;

    h1 {
      width: max-content;
    }
  }
`;
