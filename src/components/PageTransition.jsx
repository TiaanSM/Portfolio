

const PageTransition = (props) => {

    const pageCoverBefore = {
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: '0px',
        left: '0px',
        backgroundColor: props.bgColor,
        transition: 'all 1s ease forwards'
    }

    const pageCoverAfter = {
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: '100vh',
        left: '0px',
        backgroundColor: props.bgColor,
        transition: 'all 1s ease forwards'
    }

  return (

    <div style={pageCoverBefore}></div>

  )
}

export default PageTransition