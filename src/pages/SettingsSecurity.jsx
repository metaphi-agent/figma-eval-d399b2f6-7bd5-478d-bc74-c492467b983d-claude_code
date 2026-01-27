import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

export default function SettingsSecurity() {
  return (
    <div className="space-y-6">
      <Card>
        <div className="flex gap-8 border-b border-border-light pb-4 mb-6">
          <button className="text-[16px] font-medium text-text-secondary hover:text-text-primary transition-colors">
            Edit Profile
          </button>
          <button className="text-[16px] font-medium text-text-secondary hover:text-text-primary transition-colors">
            Preferences
          </button>
          <button className="text-[16px] font-medium text-text-primary border-b-3 border-primary-500">
            Security
          </button>
        </div>

        <div className="space-y-6">
          {/* Two Factor Authentication */}
          <div className="flex items-center justify-between py-4 border-b border-border-light">
            <div>
              <p className="text-[16px] font-medium text-text-primary mb-1">Enable or disable two factor authentication</p>
            </div>
            <label className="relative inline-block w-14 h-7">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-14 h-7 bg-border-light rounded-full peer peer-checked:bg-primary-500 transition-colors cursor-pointer" />
              <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-7" />
            </label>
          </div>

          {/* Change Password */}
          <div className="flex items-center justify-between py-4 border-b border-border-light">
            <div>
              <p className="text-[16px] font-medium text-text-primary mb-1">Change Password</p>
              <p className="text-[14px] text-text-secondary">Set a unique password to protect your account</p>
            </div>
            <Button variant="outline" size="sm">Change</Button>
          </div>

          {/* Device Management */}
          <div className="py-4">
            <h3 className="text-[18px] font-semibold text-text-primary mb-4">Device Management</h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-bg-secondary rounded-[15px]">
                <div className="flex items-center gap-4">
                  <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-sm">
                    💻
                  </div>
                  <div>
                    <p className="text-[16px] font-medium text-text-primary">MacBook Pro</p>
                    <p className="text-[14px] text-text-secondary">Last active: 2 hours ago</p>
                  </div>
                </div>
                <button className="text-[14px] font-medium text-error-500 hover:text-error-600 transition-colors">
                  Remove
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-bg-secondary rounded-[15px]">
                <div className="flex items-center gap-4">
                  <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-sm">
                    📱
                  </div>
                  <div>
                    <p className="text-[16px] font-medium text-text-primary">iPhone 13 Pro</p>
                    <p className="text-[14px] text-text-secondary">Last active: 1 day ago</p>
                  </div>
                </div>
                <button className="text-[14px] font-medium text-error-500 hover:text-error-600 transition-colors">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <Button>Save</Button>
        </div>
      </Card>
    </div>
  )
}
