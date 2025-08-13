import { Badge } from './ui/badge';

const products = [
  {
    id: 'growth-toolkit',
    title: 'Growth Toolkit',
    description: 'MARKETING AUTOMATION',
    icon: '📈',
    color: 'bg-purple-500',
  },
  {
    id: 'vibe-analytics',
    title: 'Vibe Analytics',
    description: 'DATA VISUALIZATION SUITE',
    icon: '📊',
    color: 'bg-green-500',
  },
  {
    id: 'conversion-lab',
    title: 'Conversion Lab',
    description: 'A/B TESTING PLATFORM',
    icon: '🧪',
    color: 'bg-orange-500',
  },
];

const ProductsSection = () => {
  return (
    <div className="bg-card rounded-[--border-radius-lg] p-8 shadow-[--shadow-card]">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 bg-text-muted rounded-full"></div>
        <span className="text-sm text-text-secondary">Products</span>
      </div>
      
      <h2 className="text-2xl font-bold text-text-primary mb-4">Explore My Products</h2>
      <p className="text-text-secondary mb-8">
        Some of the digital products that I worked on as side projects, 
        explore and try it now
      </p>
      
      <div className="space-y-4 mb-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between p-4 rounded-[--border-radius] hover:bg-input-bg transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 ${product.color} rounded-[--border-radius] flex items-center justify-center text-white text-xl`}>
                {product.icon}
              </div>
              <div>
                <h3 className="font-semibold text-text-primary">{product.title}</h3>
                <Badge variant="secondary" className="bg-input-bg text-text-secondary border-0 text-xs">
                  {product.description}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <h3 className="text-2xl font-bold text-text-primary">Let's work together.</h3>
      </div>
    </div>
  );
};

export default ProductsSection;