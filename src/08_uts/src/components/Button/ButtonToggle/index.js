
export default function Button(props){
    return(
        <button className="navbar-toggler hidden-md-up" type="button" data-toggle="collapse" data-target="#tmNavbar">
            {props.content}
        </button>
    );
}