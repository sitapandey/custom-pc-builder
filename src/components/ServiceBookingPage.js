import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faToolbox, faShieldAlt, faBroom } from '@fortawesome/free-solid-svg-icons';
import './ServiceBookingPage.css';
import { useNavigate } from 'react-router-dom';

function ServiceBookingPage() {
  const navigate = useNavigate();
  const [serviceType, setServiceType] = useState('');
  const [faultDescription, setFaultDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [serviceHistory, setServiceHistory] = useState([]);
  const [serviceStatus, setServiceStatus] = useState([]);
  const [image, setImage] = useState(null);

  // 提交保修请求
  const handleWarrantySubmit = () => {
    if (faultDescription === '') {
      alert('请描述故障详情！');
      return;
    }

    const newServiceRequest = {
      type: '保修申请',
      description: faultDescription,
      date: new Date().toLocaleDateString(),
      status: '处理中',
      image: image,
    };

    setServiceHistory([...serviceHistory, newServiceRequest]);
    setServiceStatus([...serviceStatus, newServiceRequest]);
    alert('保修申请已提交！');
    setFaultDescription('');
    setImage(null);
  };

  // 提交清灰和维护预约
  const handleMaintenanceSubmit = () => {
    if (serviceType === '' || selectedDate === '' || selectedTime === '') {
      alert('请选择服务类型和时间段！');
      return;
    }

    const newMaintenanceRequest = {
      type: serviceType,
      date: selectedDate,
      time: selectedTime,
      status: '预约中',
    };

    setServiceHistory([...serviceHistory, newMaintenanceRequest]);
    setServiceStatus([...serviceStatus, newMaintenanceRequest]);
    alert('清灰和维护预约已提交！');
    setServiceType('');
    setSelectedDate('');
    setSelectedTime('');
  };

  // 上传图片
  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="service-booking-page" data-aos="fade-up">
      <h2 className="section-title">服务预约页面</h2>
      <div className="warranty-section" data-aos="fade-right">
        <h3 className="sub-title">
          <FontAwesomeIcon icon={faShieldAlt} className="icon" /> 保修申请
        </h3>
        <textarea
          value={faultDescription}
          onChange={(e) => setFaultDescription(e.target.value)}
          placeholder="请描述故障详情"
          className="description-input"
        />
        <input type="file" onChange={handleImageUpload} className="image-upload" />
        <button onClick={handleWarrantySubmit} className="submit-button">提交保修申请</button>
      </div>

      <div className="maintenance-section" data-aos="fade-left">
        <h3 className="sub-title">
          <FontAwesomeIcon icon={faBroom} className="icon" /> 清灰和维护预约
        </h3>
        <select
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
          className="service-type-select"
        >
          <option value="">请选择服务类型</option>
          <option value="清灰">清灰</option>
          <option value="设备维护">设备维护</option>
        </select>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="date-input"
        />
        <input
          type="time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="time-input"
        />
        <button onClick={handleMaintenanceSubmit} className="submit-button">提交维护预约</button>
      </div>

      <div className="service-history-section" data-aos="fade-up">
        <h3 className="sub-title">
          <FontAwesomeIcon icon={faCalendarAlt} className="icon" /> 服务历史记录
        </h3>
        {serviceHistory.length === 0 ? (
          <p>暂无服务记录</p>
        ) : (
          <ul className="history-list">
            {serviceHistory.map((service, index) => (
              <li key={index} className="history-item">
                <strong>{service.type}</strong> - 日期: {service.date} - 状态: {service.status}
                {service.image && <img src={URL.createObjectURL(service.image)} alt="故障图片" className="uploaded-image" />}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="service-status-section" data-aos="fade-up">
        <h3 className="sub-title">
          <FontAwesomeIcon icon={faToolbox} className="icon" /> 服务状态跟踪
        </h3>
        {serviceStatus.length === 0 ? (
          <p>暂无服务状态</p>
        ) : (
          <ul className="status-list">
            {serviceStatus.map((status, index) => (
              <li key={index} className="status-item">
                <strong>{status.type}</strong> - 日期: {status.date} - 状态: {status.status}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ServiceBookingPage;