export const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl mb-6">
          Our Blog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Discover the latest articles, book reviews, and literary insights from
          our passionate team of readers and writers.
        </p>
      </div>

      {/* Featured Post */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 md:w-1/2">
              <img
                className="h-64 w-full object-cover md:h-full"
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Featured blog post"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">
                Featured Article
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                The Evolution of Modern Literature in the Digital Age
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Explore how digital technology has transformed the way we write,
                publish, and consume literature in the 21st century.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Author"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      John Doe
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      April 15, 2024
                    </p>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                >
                  Read more →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          Latest Articles
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Blog Post 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              className="h-48 w-full object-cover"
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Blog post"
            />
            <div className="p-6">
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                Book Reviews
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                10 Must-Read Books of 2024
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Discover our curated list of the most anticipated books
                releasing this year across various genres.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  April 12, 2024
                </span>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              className="h-48 w-full object-cover"
              src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Blog post"
            />
            <div className="p-6">
              <div className="text-sm text-green-600 dark:text-green-400 font-medium mb-2">
                Writing Tips
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                How to Develop a Consistent Reading Habit
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Practical strategies to help you read more books and make
                reading a regular part of your daily routine.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  April 10, 2024
                </span>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              className="h-48 w-full object-cover"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Blog post"
            />
            <div className="p-6">
              <div className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-2">
                Author Interviews
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Exclusive Interview with Bestselling Author Jane Smith
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Get insights into the creative process and upcoming projects
                from one of today's most popular authors.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  April 5, 2024
                </span>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>

          {/* Blog Post 4 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              className="h-48 w-full object-cover"
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Blog post"
            />
            <div className="p-6">
              <div className="text-sm text-orange-600 dark:text-orange-400 font-medium mb-2">
                Literary Analysis
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                The Symbolism in Classic Gothic Literature
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Explore the hidden meanings and symbolic elements in famous
                Gothic novels from the 19th century.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  April 3, 2024
                </span>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>

          {/* Blog Post 5 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              className="h-48 w-full object-cover"
              src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Blog post"
            />
            <div className="p-6">
              <div className="text-sm text-red-600 dark:text-red-400 font-medium mb-2">
                Publishing News
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                The Future of Independent Publishing
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                How small publishers are adapting to changing market conditions
                and embracing new technologies.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  March 28, 2024
                </span>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>

          {/* Blog Post 6 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              className="h-48 w-full object-cover"
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Blog post"
            />
            <div className="p-6">
              <div className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                Reading Lists
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Summer Reading Recommendations for Every Taste
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                From beach reads to thought-provoking nonfiction, find your
                perfect summer book from our curated list.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  March 25, 2024
                </span>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
