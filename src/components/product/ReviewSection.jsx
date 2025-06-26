import { FiStar, FiUser } from 'react-icons/fi';

const reviews = [
  {
    id: 1,
    user: 'Sarah Johnson',
    rating: 5,
    date: '2024-02-15',
    comment: 'Beautiful plant! Arrived in perfect condition and is thriving in my home.',
    verified: true
  },
  {
    id: 2,
    user: 'Michael Chen',
    rating: 4,
    date: '2024-02-10',
    comment: 'Good quality plant, but shipping took longer than expected.',
    verified: true
  }
];

export default function ReviewSection({ productId }) {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-8">Customer Reviews</h2>
      
      <div className="space-y-8">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="bg-gray-100 p-2 rounded-full">
                  <FiUser className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">{review.user}</div>
                  <div className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
              {review.verified && (
                <span className="text-sm text-green-600">Verified Purchase</span>
              )}
            </div>
            
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={`w-5 h-5 ${
                    i < review.rating
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}