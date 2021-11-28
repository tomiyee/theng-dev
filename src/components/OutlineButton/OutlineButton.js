import './OutlineButton.css';

const OutlineButton = (props) => {
    const { children } = props;

    const outlineColor = 'var(--white)';
    const fontColor = 'var(--white)';
    return (
        <div className='outline-button'>{children}</div>
    );
};

export default OutlineButton;