import { Label, Container } from './styles';

function RangerRisk({ title, ...rest }) {
  return (
    <>
      <Container>
        <Label>{title}</Label>

        <div className="rating">
          <div className="grid-x">
            <div className="small-2 medium-2 cell">
              <span>menor</span>
            </div>
            <div className="small-8 medium-8 ranking">
              <datalist id="custom-list">
                <option value="1"></option>
                <option value="2"></option>
                <option value="3"></option>
                <option value="4"></option>
                <option value="5"></option>
                <option value="6"></option>
                <option value="7"></option>
                <option value="8"></option>
                <option value="9"></option>
                <option value="10"></option>
                <option value="11"></option>
                <option value="12"></option>
              </datalist>

              <input
                type="range"
                min="1"
                max="12"
                step="1"
                list="custom-list"
                {...rest}
              />
            </div>
            <div className="small-2 medium-2 cell">
              <span>maior</span>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default RangerRisk;
