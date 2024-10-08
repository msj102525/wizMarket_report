import React from 'react';

const LocInfoStrategy = ({ locInfoReportData, loading }) => {
    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="w-16 h-16 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    // if (!locInfoReportData) {
    //     return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
    // }


    return (
        <div className='bg-white p-6 rounded-lg shadow-md space-y-6'>
            <div className=" pb-10">
                <p>이 지역에선 이렇게 입지 대응 전략을 세워보세요!</p>
            </div>
        </div>
    );
};

export default LocInfoStrategy;