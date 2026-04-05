import { motion } from 'framer-motion';
import {
  BarChart3,
  TrendingUp,
  Users,
  Activity,
  Globe,
  Smartphone,
  QrCode,
  Link2,
  MessageSquare,
  Download,
  Calendar,
  Filter,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';
import { useState } from 'react';

const mockAnalyticsData = {
  overview: {
    totalUsers: 45231,
    activeUsers: 12847,
    qrGenerated: 89234,
    linksCreated: 45612,
    messagesSent: 234567,
    conversionRate: 23.5,
  },
  trends: [
    { date: '2024-01', users: 3200, qrCodes: 5400, links: 2800 },
    { date: '2024-02', users: 3800, qrCodes: 6200, links: 3100 },
    { date: '2024-03', users: 4200, qrCodes: 7100, links: 3500 },
    { date: '2024-04', users: 5100, qrCodes: 8300, links: 4200 },
    { date: '2024-05', users: 5800, qrCodes: 9200, links: 4800 },
    { date: '2024-06', users: 6400, qrCodes: 10200, links: 5400 },
  ],
  topCountries: [
    { country: 'United States', users: 12453, percentage: 27.5 },
    { country: 'India', users: 8934, percentage: 19.8 },
    { country: 'Brazil', users: 5643, percentage: 12.5 },
    { country: 'United Kingdom', users: 3421, percentage: 7.6 },
    { country: 'Germany', users: 2890, percentage: 6.4 },
  ],
  deviceBreakdown: [
    { device: 'Mobile', percentage: 68.5, icon: Smartphone },
    { device: 'Desktop', percentage: 24.3, icon: Globe },
    { device: 'Tablet', percentage: 7.2 },
  ],
  featureUsage: [
    { feature: 'QR Code Generation', usage: 89234, growth: 15.3 },
    { feature: 'Direct Links', usage: 45612, growth: 8.7 },
    { feature: 'Message Templates', usage: 32145, growth: 12.1 },
    { feature: 'vCard Generator', usage: 18765, growth: 5.2 },
    { feature: 'Bulk Operations', usage: 9234, growth: 22.8 },
  ],
};

const StatCard = ({ title, value, change, changeType, icon: Icon }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
  >
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm text-muted-foreground">{title}</p>
        <h3 className="text-2xl font-bold text-foreground mt-1">{value}</h3>
      </div>
      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
    </div>
    <div className="flex items-center gap-1 mt-4">
      {changeType === 'positive' ? (
        <ArrowUpRight className="w-4 h-4 text-green-500" />
      ) : (
        <ArrowDownRight className="w-4 h-4 text-red-500" />
      )}
      <span
        className={`text-sm font-medium ${
          changeType === 'positive' ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {change}
      </span>
      <span className="text-sm text-muted-foreground">vs last month</span>
    </div>
  </motion.div>
);

const SimpleBarChart = ({ data }: { data: any[] }) => {
  const maxValue = Math.max(...data.map((d) => d.users));
  return (
    <div className="space-y-3">
      {data.map((item, index) => (
        <div key={item.date} className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground w-16">{item.date}</span>
          <div className="flex-1 h-8 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(item.users / maxValue) * 100}%` }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="h-full bg-primary rounded-full"
            />
          </div>
          <span className="text-sm font-medium w-12 text-right">
            {item.users.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
};

export default function AnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState('30d');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 mb-2"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <h1 className="text-3xl font-bold text-foreground">
                  Analytics Dashboard
                </h1>
              </motion.div>
              <p className="text-muted-foreground">
                Real-time insights into WAssistant usage and performance
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-3 py-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <select
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="bg-transparent text-sm outline-none"
                >
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 90 days</option>
                  <option value="1y">Last year</option>
                </select>
              </div>
              <button className="flex items-center gap-2 bg-card border border-border rounded-lg px-3 py-2 hover:border-primary/50 transition-all">
                <Filter className="w-4 h-4" />
                <span className="text-sm">Filter</span>
              </button>
              <button className="flex items-center gap-2 bg-primary text-primary-foreground rounded-lg px-4 py-2 hover:bg-primary/90 transition-all">
                <Download className="w-4 h-4" />
                <span className="text-sm">Export</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Total Users"
              value={mockAnalyticsData.overview.totalUsers.toLocaleString()}
              change="+12.5%"
              changeType="positive"
              icon={Users}
            />
            <StatCard
              title="Active Users"
              value={mockAnalyticsData.overview.activeUsers.toLocaleString()}
              change="+8.3%"
              changeType="positive"
              icon={Activity}
            />
            <StatCard
              title="QR Codes Generated"
              value={mockAnalyticsData.overview.qrGenerated.toLocaleString()}
              change="+15.2%"
              changeType="positive"
              icon={QrCode}
            />
            <StatCard
              title="Links Created"
              value={mockAnalyticsData.overview.linksCreated.toLocaleString()}
              change="+6.8%"
              changeType="positive"
              icon={Link2}
            />
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* User Growth Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    User Growth
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    New users over time
                  </p>
                </div>
                <div className="flex items-center gap-2 text-green-500">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">+18.2%</span>
                </div>
              </div>
              <SimpleBarChart data={mockAnalyticsData.trends} />
            </motion.div>

            {/* Geographic Distribution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Top Countries
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    User distribution by location
                  </p>
                </div>
                <Globe className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="space-y-4">
                {mockAnalyticsData.topCountries.map((country, index) => (
                  <div key={country.country} className="flex items-center gap-3">
                    <span className="text-sm font-medium w-6 text-muted-foreground">
                      {index + 1}
                    </span>
                    <span className="text-sm flex-1">{country.country}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${country.percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-16 text-right">
                        {country.users.toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Usage & Device Breakdown */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Feature Usage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Feature Usage
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Most popular features by usage count
                  </p>
                </div>
                <Activity className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="space-y-4">
                {mockAnalyticsData.featureUsage.map((feature) => (
                  <div
                    key={feature.feature}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        {feature.feature.includes('QR') ? (
                          <QrCode className="w-5 h-5 text-primary" />
                        ) : feature.feature.includes('Links') ? (
                          <Link2 className="w-5 h-5 text-primary" />
                        ) : (
                          <MessageSquare className="w-5 h-5 text-primary" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          {feature.feature}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {feature.usage.toLocaleString()} uses
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-sm font-medium ${
                          feature.growth > 0 ? 'text-green-500' : 'text-red-500'
                        }`}
                      >
                        {feature.growth > 0 ? '+' : ''}
                        {feature.growth}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Device Breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Device Usage
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Breakdown by device type
              </p>

              <div className="space-y-6">
                {mockAnalyticsData.deviceBreakdown.map((device) => (
                  <div key={device.device}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {device.icon && (
                          <device.icon className="w-4 h-4 text-muted-foreground" />
                        )}
                        <span className="text-sm font-medium">
                          {device.device}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {device.percentage}%
                      </span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${device.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span>Mobile usage up 5.2% this month</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conversion Metrics */}
      <section className="py-8 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-primary/10 via-primary/5 to-background border border-primary/20 rounded-xl p-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Conversion Rate
                </h3>
                <p className="text-muted-foreground max-w-xl">
                  {mockAnalyticsData.overview.conversionRate}% of visitors generate
                  a QR code or link on their first visit. This is 15% higher than
                  industry average.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">
                    {mockAnalyticsData.overview.conversionRate}%
                  </p>
                  <p className="text-sm text-muted-foreground">Conversion</p>
                </div>
                <div className="h-12 w-px bg-border" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-foreground">
                    {mockAnalyticsData.overview.messagesSent.toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground">Messages</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
