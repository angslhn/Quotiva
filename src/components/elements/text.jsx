/* eslint-disable react/prop-types */
function Text({ type, className, children }) {
    const Tag = type;
    return (
        <Tag className={className}>{children}</Tag>
    );
}

export default Text;