import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function Detail() {
  const { id } = useParams();
  const [ loading, setLoading ] = useState(true);
  const [ movie, setMovie ] = useState(null);

  const getMovie = async () => {
    try {
      const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    }
  }

  return(<></>);
}

export default Detail