export default function StockItem({ resultitem }: { resultitem: any }) {
  const { item } = resultitem;
  return (
    <div className="notification">
      <div className="columns is-multiline">
        <div className="column is-half">
          <b>Item:</b> {item.item} <br />
        </div>
        <div className="column is-half">
          <b>Description:</b> {item.description}
        </div>
        <div className="column is-half">
          <b>Barcode:</b> {item.barcode}
        </div>
      </div>
      <div className="columns">
        <div className="column has-text-centered">
          <h4 className="is-subtitle is-size-4">
            <b>Location:</b> {item.location} {item.unit}
          </h4>
        </div>

        <div className="column has-text-centered">
          <h4 className="is-subtitle is-size-4">
            <b>Shelf:</b> {item.shelf}
          </h4>
        </div>
        <div className="column has-text-centered">
          <h4 className="is-subtitle is-size-4">
            <b>Tray:</b> {item.tray}
          </h4>
        </div>
      </div>
    </div>
  );
}
