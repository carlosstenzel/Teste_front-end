import LazyLoad from 'react-lazyload';

class TableLazyLoad extends LazyLoad {
  render() {
    const {
      height,
      children,
      placeholder,
      classNamePrefix,
      style,
      onClick,
      className,
    } = this.props;

    return (
      <tr
        className={`fund ${className}`}
        ref={this.setRef}
        style={style}
        onClick={onClick}
      >
        {this.visible ? children : placeholder ? placeholder : null}
      </tr>
    );
  }
}

export default TableLazyLoad;
