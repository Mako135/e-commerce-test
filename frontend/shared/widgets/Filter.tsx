import Divider from "../components/Divider";

export default function Filter() {
  return (
    <div className="min-w-64">
      Filter
      <Divider />
      <div>
        <h2>Filter by rating</h2>
        <div>
          <div className="flex items-center gap-1">
            <input type="radio" id="stars-1" />
            <label htmlFor="stars-1">1 star and more</label>
          </div>
          <div className="flex items-center gap-1">
            <input type="radio" id="stars-2" />
            <label htmlFor="stars-2">2 stars and more</label>
          </div>
          <div className="flex items-center gap-1">
            <input type="radio" id="stars-3" />
            <label htmlFor="stars-3">3 stars and more</label>
          </div>
          <div className="flex items-center gap-1">
            <input type="radio" id="stars-4" />
            <label htmlFor="stars-4">4 stars and more</label>
          </div>
        </div>
      </div>
    </div>
  );
}
