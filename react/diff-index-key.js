// https://stackoverflow.com/questions/42773892/wrong-components-rendered-by-preact

class DemoPage extends Component {
  constructor(props) {
    super(props);
    this.state = { packages: ["a", "b", "c", "d", "e"] };
  }

  removePackage(tracking) {
    const { packages: _packages } = this.state;
    this.setState({
      packages: _packages.filter((e) => e !== tracking),
    });
  }

  render() {
    const { packages: _packages } = this.state;
    const packages = _packages.map((tracking, i) => {
      return (
        <div className="package" key={i}>
          <button onClick={this.removePackage.bind(this, tracking)}>X</button>
          {i}
        </div>
      );
    });
    return (
      <div>
        <div className="title">Packages</div>
        <div className="packages">{packages}</div>
      </div>
    );
  }
}

export default DemoPage;
