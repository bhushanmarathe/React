// import React, { Component } from "react";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";

// import InfiniteScroll from "react-infinite-scroll-component";
// import "bootstrap/dist/css/bootstrap.min.css";

// export class News extends Component {
//   static defaultProps = {
//     country: "us",
//     pageSize: 8,
//     category: "general",
//   };

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   };

//   constructor(props) {
//     super(props);
//     console.log("Hello! Contructor from News Component");

//     this.state = {
//       articles: [],
//       loading: true,
//       page: 1,
//       totalResults: 0,
//     };

//     this.capitalizeFirstLetter = (string) => {
//       return string.charAt(0).toUpperCase() + string.slice(1);
//     };

//     // const capitalizedCategory = this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1);

//     document.title = `${this.capitalizeFirstLetter(
//       this.props.category
//     )} - NewsMonkey`;
//   }

//   updateNews = async (page) => {
//     this.setState({
//       loading: true,
//     });

//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a18a20cf126e4b33baf8147e3c747a64&page=${page}&pageSize=${this.props.pageSize}`;

//     let data = await fetch(url);
//     let parsedData = await data.json();

//     this.setState({
//       page: page,
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//   };

//   articles = [
//     {
//       source: {
//         id: "espn-cric-info",
//         name: "ESPN Cric Info",
//       },
//       author: null,
//       title:
//         "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
//       description:
//         "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
//       url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
//       urlToImage:
//         "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
//       publishedAt: "2020-04-27T11:41:47Z",
//       content:
//         "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
//     },
//     {
//       source: {
//         id: "espn-cric-info",
//         name: "ESPN Cric Info",
//       },
//       author: null,
//       title:
//         "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
//       description:
//         "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
//       url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
//       urlToImage:
//         "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
//       publishedAt: "2020-03-30T15:26:05Z",
//       content:
//         "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
//     },
//   ];

//   // constructor(){
//   //     super();
//   //     console.log("Hello I am contructor from News component");
//   //     this.state={
//   //         articles: [],
//   //         loading: false,
//   //         page:1,
//   //         totalResults:0

//   //     }
//   // }

//   async componentDidMount() {
//     console.log("componentdidmount");
//     // this.setState({ loading: true });
//     // let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a18a20cf126e4b33baf8147e3c747a64&page=1&pageSize=${this.props.pageSize}`;
//     // let data= await fetch(url);
//     // let parsedData=await data.json()
//     // console.log(parsedData);
//     // this.setState(
//     //     {
//     //         articles:parsedData.articles,
//     //         totalResults:parsedData.totalResults,
//     //         loading:false
//     //     })

//     this.updateNews(1);
//   }

//   handlePrevClick = async () => {
//     // console.log("Previous");

//     // let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a18a20cf126e4b33baf8147e3c747a64&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
//     // this.setState({loading: true});
//     // let data= await fetch(url);
//     // let parsedData=await data.json()
//     // console.log(parsedData);

//     // this.setState({
//     //     page:this.state.page-1,
//     //     articles:parsedData.articles,
//     //     loading:false
//     // })

//     this.updateNews(this.state.page - 1);
//   };

//   handleNextClick = async () => {
//     console.log("Next");

//     if (
//       this.state.page + 1 <=
//       Math.ceil(this.state.totalResults / this.props.pageSize)
//     ) {
//       this.updateNews(this.state.page + 1);
//     }

//     //     if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){

//     //     let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a18a20cf126e4b33baf8147e3c747a64&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
//     //     this.setState({loading: true});
//     //     let data= await fetch(url);
//     //     let parsedData=await data.json()
//     //     this.setState({
//     //         page:this.state.page+1,
//     //         articles:parsedData.articles,
//     //         loading:false
//     //     })
//     // }
//   };

//   fetchMoreData = async () => {
//     const nextPage = this.state.page + 1;
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d2bea4b8c19a4210a2174407dc6e0783&page=${nextPage}&pageSize=${this.props.pageSize}`;

//     this.setState({ loading: true });

//     let data = await fetch(url);
//     let parsedData = await data.json();

//     this.setState({
//       page: nextPage,
//       articles: [...this.state.articles, ...(parsedData.articles || [])],
//       totalResults: parsedData.totalResults || this.state.totalResults,
//       loading: false,
//     });
//   };

//   render() {
//     console.log("render");
//     return (
//       <div className="container my-3">
//         {/* <h1 className='text-center'>NewsMonkey - Top Headlines</h1> */}

//         <h1 className="text-center" style={{ margin: "35px 0px" }}>
//           NewsMonkey - Top{" "}
//           {this.props.category.charAt(0).toUpperCase() +
//             this.props.category.slice(1)}{" "}
//           Headlines
//         </h1>

//         {/* {this.state.loading && <Spinner/>} */}

//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length < this.state.totalResults}
//           style={{ display: "flex", flexDirection: "column" }} //To put endMessage and loader to the top.
//           inverse={false} //
//           loader={<Spinner />}
//           scrollableTarget="scrollableDiv"
//         >
//           <div className="container">
//             <div className="row">
//               {this.state.articles.map((element) => {
//                 return (
//                   <div className="col-md-4" key={element.url}>
//                     <NewsItem
//                       title={
//                         element.title
//                           ? element.title.slice(0, 45)
//                           : "No Title Available"
//                       }
//                       description={
//                         element.description
//                           ? element.description.slice(0, 88)
//                           : "No Description Available"
//                       }
//                       imageUrl={
//                         element.urlToImage
//                           ? element.urlToImage
//                           : "https://via.placeholder.com/150"
//                       }
//                       newsUrl={element.url ? element.url : "#"}
//                       author={element.author}
//                       date={element.publishedAt}
//                       source={element.source.name}
//                       category={this.props.category}
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </InfiniteScroll>

//         {/* <div className='container d-flex justify-content-between'>
//                     <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
//                     <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
//                 </div> */}
//       </div>
//     );
//   }
// }

// export default News;

import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

import InfiniteScroll from "react-infinite-scroll-component";
import "bootstrap/dist/css/bootstrap.min.css";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };

    this.capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsMonkey`;
  }

  updateNews = async (page) => {
    this.setState({
      loading: true,
    });

    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a18a20cf126e4b33baf8147e3c747a64&page=${page}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: page,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  async componentDidMount() {
    this.updateNews(1);
  }

  handlePrevClick = async () => {
    this.updateNews(this.state.page - 1);
  };

  handleNextClick = async () => {
    if (
      this.state.page + 1 <=
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
      this.updateNews(this.state.page + 1);
    }
  };

  fetchMoreData = async () => {
    const nextPage = this.state.page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d2bea4b8c19a4210a2174407dc6e0783&page=${nextPage}&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });

    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: nextPage,
      articles: [...this.state.articles, ...(parsedData.articles || [])], // Ensure data is appended
      totalResults: parsedData.totalResults || this.state.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          NewsMonkey - Top{" "}
          {this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1)}{" "}
          Headlines
        </h1>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults} // Ensuring that there is more data to load
          loader={<Spinner />}
          endMessage={<p>No more articles to load</p>}
          //scrollableTarget="scrollableDiv"
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={
                        element.title
                          ? element.title.slice(0, 45)
                          : "No Title Available"
                      }
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : "No Description Available"
                      }
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://via.placeholder.com/150"
                      }
                      newsUrl={element.url ? element.url : "#"}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                      category={this.props.category}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
