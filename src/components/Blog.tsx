interface BlogProps {
  isActive: boolean
}

const Blog = ({ isActive }: BlogProps) => {
  const blogPosts = [
    {
      id: 1,
      title: "Design conferences in 2022",
      category: "Design",
      image: "/assets/images/blog-1.jpg",
      date: "Fab 23, 2022",
      description: "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo."
    },
    {
      id: 2,
      title: "Best fonts every designer",
      category: "Design",
      image: "/assets/images/blog-2.jpg",
      date: "Fab 23, 2022",
      description: "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi."
    },
    {
      id: 3,
      title: "Design digest #80",
      category: "Design",
      image: "/assets/images/blog-3.jpg",
      date: "Fab 23, 2022",
      description: "Excepteur sint occaecat cupidatat no proident, quis nostrud exercitation."
    },
    {
      id: 4,
      title: "UI interactions of the week",
      category: "Design",
      image: "/assets/images/blog-4.jpg",
      date: "Fab 23, 2022",
      description: "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud."
    },
    {
      id: 5,
      title: "The forgotten art of spacing",
      category: "Design",
      image: "/assets/images/blog-5.jpg",
      date: "Fab 23, 2022",
      description: "Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna."
    },
    {
      id: 6,
      title: "Design digest #79",
      category: "Design",
      image: "/assets/images/blog-6.jpg",
      date: "Fab 23, 2022",
      description: "Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum."
    }
  ]

  return (
    <article className={`blog ${isActive ? 'active' : ''}`} data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {blogPosts.map((post) => (
            <li key={post.id} className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img src={post.image} alt={post.title} loading="lazy" />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{post.category}</p>
                    <span className="dot"></span>
                    <time dateTime="2022-02-23">{post.date}</time>
                  </div>

                  <h3 className="h3 blog-item-title">{post.title}</h3>

                  <p className="blog-text">{post.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default Blog 