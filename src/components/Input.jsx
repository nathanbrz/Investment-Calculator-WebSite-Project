
export default function Input({onEdit, inputs}) {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment:</label>
          <input
            type="number"
            required
            value={inputs.initialInvestment}
            onChange={(event) => onEdit(event, "initialInvestment")}
          />
        </p>
        <p>
          <label htmlFor="initialInvestment">Annual Investment:</label>
          <input
            type="number"
            required
            value={inputs.annualInvestment}
            onChange={(event) => onEdit(event, "annualInvestment")}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Expected Return</label>
          <input
            type="number"
            required
            value={inputs.expectedReturn}
            onChange={(event) => onEdit(event, "expectedReturn")}
          />
        </p>
        <p>
          <label htmlFor="initialInvestment">Duration</label>
          <input
            type="number"
            required
            value={inputs.duration}
            onChange={(event) => onEdit(event, "duration")}
          />
        </p>
      </div>
    </section>
  );
}
