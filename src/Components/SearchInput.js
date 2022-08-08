export default function SearchInput() {
  return (
    //darf nur ein element enthalten
    <div>
      <form
        aria-labelledby="form-heading"
        aria-describedby="form-description"
      >
        <fieldset>
          <input id="name" type="text" name="name" />
        </fieldset>
      </form>
    </div>
  );
}
