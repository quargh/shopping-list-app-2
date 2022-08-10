export default function SearchInput({onHandleSearchEvent}) {
  return (
    //darf nur ein element enthalten
    <div>
      <form
        aria-labelledby="form-heading"
        aria-describedby="form-description"
      >
        <fieldset>
              <input
                  id="name"
                  type="text"
                  name="name"
                  onChange={(event) => {
                        onHandleSearchEvent(event.target.value)
                  }}/>
        </fieldset>
      </form>
    </div>
  );
}
