import { useState } from 'react';
import Card from '../components/ui/Card';

type TabType = 'profile' | 'preferences' | 'security';

export default function Settings() {
  const [activeTab, setActiveTab] = useState<TabType>('profile');

  const tabs = [
    { id: 'profile' as TabType, label: 'Edit Profile' },
    { id: 'preferences' as TabType, label: 'Preferences' },
    { id: 'security' as TabType, label: 'Security' },
  ];

  return (
    <div>
      <Card>
        {/* Tabs */}
        <div className="flex gap-10 border-b border-[#F3F5F9] mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 text-[16px] font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-[#396AFF] border-b-2 border-[#396AFF]'
                  : 'text-[#718EBF] hover:text-[#396AFF]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'profile' && <ProfileTab />}
        {activeTab === 'preferences' && <PreferencesTab />}
        {activeTab === 'security' && <SecurityTab />}
      </Card>
    </div>
  );
}

function ProfileTab() {
  return (
    <div className="flex gap-12">
      {/* Profile Picture */}
      <div className="flex-shrink-0">
        <div className="relative w-[130px] h-[130px]">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=260&h=260&fit=crop"
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
          <button className="absolute bottom-0 right-0 w-[35px] h-[35px] bg-[#396AFF] rounded-full flex items-center justify-center text-white hover:bg-[#2D60E8] transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M11.5 2.5L13.5 4.5L5 13H3V11L11.5 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="flex-1 grid grid-cols-2 gap-6">
        <div>
          <label className="block text-[16px] text-[#343C6A] mb-2">Your Name</label>
          <input
            type="text"
            defaultValue="Charlene Reed"
            className="w-full h-[50px] bg-white border border-[#DFEAF2] rounded-[15px] px-4 text-[15px] text-[#718EBF] focus:outline-none focus:border-[#396AFF]"
          />
        </div>
        <div>
          <label className="block text-[16px] text-[#343C6A] mb-2">User Name</label>
          <input
            type="text"
            defaultValue="Charlene Reed"
            className="w-full h-[50px] bg-white border border-[#DFEAF2] rounded-[15px] px-4 text-[15px] text-[#718EBF] focus:outline-none focus:border-[#396AFF]"
          />
        </div>
        <div>
          <label className="block text-[16px] text-[#343C6A] mb-2">Email</label>
          <input
            type="email"
            defaultValue="charlenereed@gmail.com"
            className="w-full h-[50px] bg-white border border-[#DFEAF2] rounded-[15px] px-4 text-[15px] text-[#718EBF] focus:outline-none focus:border-[#396AFF]"
          />
        </div>
        <div>
          <label className="block text-[16px] text-[#343C6A] mb-2">Password</label>
          <input
            type="password"
            defaultValue="********"
            className="w-full h-[50px] bg-white border border-[#DFEAF2] rounded-[15px] px-4 text-[15px] text-[#718EBF] focus:outline-none focus:border-[#396AFF]"
          />
        </div>
        <div>
          <label className="block text-[16px] text-[#343C6A] mb-2">Date of Birth</label>
          <div className="relative">
            <input
              type="text"
              defaultValue="25 January 1990"
              className="w-full h-[50px] bg-white border border-[#DFEAF2] rounded-[15px] px-4 text-[15px] text-[#718EBF] focus:outline-none focus:border-[#396AFF]"
            />
            <svg className="absolute right-4 top-1/2 -translate-y-1/2 text-[#718EBF]" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
        <div>
          <label className="block text-[16px] text-[#343C6A] mb-2">Present Address</label>
          <input
            type="text"
            defaultValue="San Jose, California, USA"
            className="w-full h-[50px] bg-white border border-[#DFEAF2] rounded-[15px] px-4 text-[15px] text-[#718EBF] focus:outline-none focus:border-[#396AFF]"
          />
        </div>
        <div>
          <label className="block text-[16px] text-[#343C6A] mb-2">Permanent Address</label>
          <input
            type="text"
            defaultValue="San Jose, California, USA"
            className="w-full h-[50px] bg-white border border-[#DFEAF2] rounded-[15px] px-4 text-[15px] text-[#718EBF] focus:outline-none focus:border-[#396AFF]"
          />
        </div>
        <div>
          <label className="block text-[16px] text-[#343C6A] mb-2">City</label>
          <input
            type="text"
            defaultValue="San Jose"
            className="w-full h-[50px] bg-white border border-[#DFEAF2] rounded-[15px] px-4 text-[15px] text-[#718EBF] focus:outline-none focus:border-[#396AFF]"
          />
        </div>
        <div>
          <label className="block text-[16px] text-[#343C6A] mb-2">Postal Code</label>
          <input
            type="text"
            defaultValue="45962"
            className="w-full h-[50px] bg-white border border-[#DFEAF2] rounded-[15px] px-4 text-[15px] text-[#718EBF] focus:outline-none focus:border-[#396AFF]"
          />
        </div>
        <div>
          <label className="block text-[16px] text-[#343C6A] mb-2">Country</label>
          <input
            type="text"
            defaultValue="USA"
            className="w-full h-[50px] bg-white border border-[#DFEAF2] rounded-[15px] px-4 text-[15px] text-[#718EBF] focus:outline-none focus:border-[#396AFF]"
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="flex-shrink-0 self-end">
        <button className="w-[190px] h-[50px] bg-[#396AFF] text-white rounded-[15px] text-[18px] font-medium hover:bg-[#2D60E8] transition-colors">
          Save
        </button>
      </div>
    </div>
  );
}

function PreferencesTab() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-[16px] text-[#343C6A] mb-2">Currency</label>
          <div className="relative">
            <select className="w-full h-[50px] bg-white border border-[#DFEAF2] rounded-[15px] px-4 text-[15px] text-[#718EBF] focus:outline-none focus:border-[#396AFF] appearance-none">
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
            </select>
            <svg className="absolute right-4 top-1/2 -translate-y-1/2 text-[#718EBF] pointer-events-none" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
        <div>
          <label className="block text-[16px] text-[#343C6A] mb-2">Time Zone</label>
          <div className="relative">
            <select className="w-full h-[50px] bg-white border border-[#DFEAF2] rounded-[15px] px-4 text-[15px] text-[#718EBF] focus:outline-none focus:border-[#396AFF] appearance-none">
              <option>(GMT-12:00) International Date Line West</option>
              <option>(GMT-08:00) Pacific Time</option>
              <option>(GMT-05:00) Eastern Time</option>
            </select>
            <svg className="absolute right-4 top-1/2 -translate-y-1/2 text-[#718EBF] pointer-events-none" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-[18px] font-semibold text-[#343C6A] mb-4">Notification</h3>
        <div className="space-y-4">
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-[16px] text-[#343C6A]">I send or receive digita currency</span>
            <div className="relative">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-[50px] h-[28px] bg-[#DFEAF2] rounded-full peer-checked:bg-[#16DBCC] transition-colors"></div>
              <div className="absolute top-[3px] left-[3px] w-[22px] h-[22px] bg-white rounded-full peer-checked:translate-x-[22px] transition-transform"></div>
            </div>
          </label>
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-[16px] text-[#343C6A]">I receive merchant order</span>
            <div className="relative">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-[50px] h-[28px] bg-[#DFEAF2] rounded-full peer-checked:bg-[#16DBCC] transition-colors"></div>
              <div className="absolute top-[3px] left-[3px] w-[22px] h-[22px] bg-white rounded-full peer-checked:translate-x-[22px] transition-transform"></div>
            </div>
          </label>
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-[16px] text-[#343C6A]">There are recommendation for my account</span>
            <div className="relative">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-[50px] h-[28px] bg-[#DFEAF2] rounded-full peer-checked:bg-[#16DBCC] transition-colors"></div>
              <div className="absolute top-[3px] left-[3px] w-[22px] h-[22px] bg-white rounded-full peer-checked:translate-x-[22px] transition-transform"></div>
            </div>
          </label>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="w-[190px] h-[50px] bg-[#396AFF] text-white rounded-[15px] text-[18px] font-medium hover:bg-[#2D60E8] transition-colors">
          Save
        </button>
      </div>
    </div>
  );
}

function SecurityTab() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-[18px] font-semibold text-[#343C6A] mb-4">Two-factor Authentication</h3>
        <label className="flex items-center justify-between cursor-pointer p-4 bg-[#F5F7FA] rounded-[15px]">
          <div>
            <p className="text-[16px] text-[#343C6A]">Enable or disable two factor authentication</p>
            <p className="text-[14px] text-[#718EBF] mt-1">Enhance your security with 2FA</p>
          </div>
          <div className="relative">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-[50px] h-[28px] bg-[#DFEAF2] rounded-full peer-checked:bg-[#16DBCC] transition-colors"></div>
            <div className="absolute top-[3px] left-[3px] w-[22px] h-[22px] bg-white rounded-full peer-checked:translate-x-[22px] transition-transform"></div>
          </div>
        </label>
      </div>

      <div>
        <h3 className="text-[18px] font-semibold text-[#343C6A] mb-4">Change Password</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-[16px] text-[#343C6A] mb-2">Current Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full h-[50px] bg-white border border-[#DFEAF2] rounded-[15px] px-4 text-[15px] text-[#718EBF] focus:outline-none focus:border-[#396AFF]"
            />
          </div>
          <div></div>
          <div>
            <label className="block text-[16px] text-[#343C6A] mb-2">New Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full h-[50px] bg-white border border-[#DFEAF2] rounded-[15px] px-4 text-[15px] text-[#718EBF] focus:outline-none focus:border-[#396AFF]"
            />
          </div>
          <div>
            <label className="block text-[16px] text-[#343C6A] mb-2">Confirm New Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full h-[50px] bg-white border border-[#DFEAF2] rounded-[15px] px-4 text-[15px] text-[#718EBF] focus:outline-none focus:border-[#396AFF]"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="w-[190px] h-[50px] bg-[#396AFF] text-white rounded-[15px] text-[18px] font-medium hover:bg-[#2D60E8] transition-colors">
          Save
        </button>
      </div>
    </div>
  );
}
